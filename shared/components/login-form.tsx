import { signIn } from "@/auth"; // 👈 این خیلی مهمه! از auth.ts خودت ایمپورت میشه
import { AuthError } from "next-auth";

export function LoginForm() {
  return (
    <form
      action={async (formData) => {
        "use server"; // 👈 این خط باعث میشه کد سمت سرور اجرا بشه
        try {
          await signIn("credentials", formData);
        } catch (error) {
          if (error instanceof AuthError) {
            // اینجا میتونی خطا رو هندل کنی
            console.log("Login failed:", error.type);
          }
          throw error; // پرتاب مجدد برای اینکه Next.js ریدایرکت رو انجام بده
        }
      }}
      className="space-y-4"
    >
      <div className="space-y-4">
        <input
          type="text"
          name="username"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-brand-primary transition"
          placeholder="Username"
        />
        
        <input
          type="password"
          name="password"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-brand-primary transition"
          placeholder="Password"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-2 py-3 bg-brand-primary hover:bg-brand-primary/90 text-gray-900 font-medium rounded-lg shadow-sm transition-colors"
      >
        Sign In
      </button>
    </form>
  );
}