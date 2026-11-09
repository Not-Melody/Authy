import { auth } from "@/auth";
import { LoginForm } from "@/shared/components/login-form";
import { redirect } from "next/navigation";

export const instant = false;

export default async function Login() {
  const session = await auth();
  if (session) {
    redirect("/");
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-brand-secondary mb-2">
              Login
            </h1>
            <p className="text-brand-secondary/70">
              Please login to access your account.
            </p>
          </div>
          <LoginForm />
        </div>
      </div>

      <div className="border-t border-gray-200 p-6 text-sm text-gray-500 w-full">
        <div className="max-w-7xl mx-auto">
          <p>Current Path: /login</p>
          <p>Auth Status: {session ? "Logged In" : "Logged Out"}</p>
        </div>
      </div>
    </div>
  );
}
