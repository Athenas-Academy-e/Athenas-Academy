'use client'
import { useRouter } from "next/navigation";

export default function Profile() {
    const router = useRouter();

    function handleButtonClick() {
        router.push('/dashboard/profile');
    }

    return (
        <button type="button" onClick={handleButtonClick}>Meu Perfil</button>
    );
}