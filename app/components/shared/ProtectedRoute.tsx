import { useCurrentToken } from "@/app/states/features/auth/authSlice";
import { useAppSelector } from "@/app/states/hook";
import { TUserRole } from "@/app/types";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

interface TProtectedRouteProps {
    children: any;
    role: TUserRole
}

interface CustomJwtPayload extends JwtPayload {
    email: string;
    exp: number;
    iat: number;
    role: string;
    userId: string;
    userName: string;
}


const ProtectedRoute = ({ children, role }: TProtectedRouteProps) => {
    const router = useRouter()
    const token = useAppSelector(useCurrentToken);

    if (!token) {
        return router.push("/")
    }
    const decodedToken = jwtDecode(token) as CustomJwtPayload;

    if (decodedToken?.role !== role) {
        return router.push("/")
    }

    return children;
};

export default ProtectedRoute;
