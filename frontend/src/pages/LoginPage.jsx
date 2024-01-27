import { Card, Input, Button, Label, Container } from "../components/ui";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: loginErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const user = await signin(data);

    if (user) navigate("/tasks");
  });

  return (
    <Container className="h-screen flex items-center justify-center">
      <Card className="w-full max-w-md p-8">
        {loginErrors &&
          loginErrors.map((err, index) => (
            <p key={index} className="bg-red-500 text-white p-2 text-center rounded">{err}</p>
          ))}

        <h1 className="text-2xl font-bold text-center mb-4">Sign in</h1>

        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <Label htmlFor="password" className="mt-4">Password</Label>
          <Input
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}

          <Button className="w-full mt-4">Sign in</Button>

          <div className="flex justify-between mt-6">
            <p>Don't have an account?</p>
            <Link to="/register" className="font-bold">
              Register
            </Link>
          </div>
        </form>
      </Card>
    </Container>
  );
}

export default LoginPage;
