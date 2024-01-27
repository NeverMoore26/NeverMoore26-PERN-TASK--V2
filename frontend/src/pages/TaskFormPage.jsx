import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import { useTasks } from "../context/TaskContext";
import { Card, Input, Textarea, Label, Button } from "../components/ui";

function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const { createTask, updateTask, loadTask, errors: tasksErrors } = useTasks();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    try {
      let task;
      if (!params.id) {
        task = await createTask(data);
      } else {
        task = await updateTask(params.id, data);
      }

      if (task) {
        Swal.fire(
          '¡Hecho!',
          `Tarea ${params.id ? 'actualizada' : 'creada'} con éxito.`,
          'success'
        );
        navigate("/tasks");
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal al procesar la tarea.',
      });
    }
  });

  useEffect(() => {
    if (params.id) {
      loadTask(params.id).then((task) => {
        setValue("title", task.title);
        setValue("description", task.description);
      });
    }
  }, [params.id, loadTask, setValue]);

  return (
    <div className="flex h-screen justify-center items-center p-4">
      <div className="w-full max-w-4xl">
        <Card>
          {tasksErrors.map((error, i) => (
            <p className="text-red-500" key={i}>{error}</p>
          ))}
          <h2 className="text-3xl font-bold my-4">
            {params.id ? "Edit Task" : "Create Task"}
          </h2>
          <form onSubmit={onSubmit}>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              placeholder="Title"
              autoFocus
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-red-500">Title is required</span>
            )}

            <Label htmlFor="description">Description</Label>
            <Textarea
              placeholder="Description"
              rows={3}
              {...register("description")}
            ></Textarea>

            <Button type="submit">{params.id ? "Edit Task" : "Create Task"}</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default TaskFormPage;
