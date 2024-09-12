'use client'
import { useRouter } from "next/navigation";

export default function Settings() {
    const router = useRouter();

    function handleButtonClick() {
        router.push('/dashboard/settings');
    }

    return (
        <button type="button" onClick={handleButtonClick}>Configuração</button>
    );
}