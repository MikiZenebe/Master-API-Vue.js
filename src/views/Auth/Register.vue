<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/stores/authStore";

type PAYLOAD = {
  email: string;
  password: string;
  username: string;
  role: "ADMIN" | "USER";
};

const form = ref<PAYLOAD>({
  email: "mik@gmail.com",
  password: "password",
  username: "miki",
  role: "ADMIN",
});
const router = useRouter();
const store = useAuthStore();
const onSubmit = async () => {
  try {
    console.log(form.value.role);
    await store.registerUser(form.value);
    router.push("/");
  } catch (error) {
    console.log(error);
  } finally {
  }
};
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <div class="mx-auto w-full max-w-md">
      <form @submit.prevent="onSubmit">
        <Card class="overflow-y-auto">
          <CardHeader class="space-y-1">
            <CardTitle class="text-2xl">Welcome</CardTitle>
            <CardDescription
              >Enter your details below to create your account</CardDescription
            >
          </CardHeader>

          <CardContent class="grid gap-4">
            <div class="grid gap-2">
              <Label for="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email"
                v-model="form.email"
              />
            </div>
            <div class="grid gap-2">
              <Label for="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="username"
                v-model="form.username"
              />
            </div>
            <div class="grid gap-2">
              <Label for="password">Password</Label>
              <Input id="password" type="password" v-model="form.password" />
            </div>

            <Label for="role">Role</Label>
            <Select v-model="form.role">
              <SelectTrigger>
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="USER">User</SelectItem>
                  <SelectItem value="ADMIN">Admin</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </CardContent>

          <CardFooter class="flex-col space-y-2">
            <Button class="w-full" type="submit">Register</Button>
            <p>
              Have an account?
              <RouterLink
                to="/auth/login"
                class="border-b border-gray-500 text-muted-foreground hover:text-primary"
                >Login
              </RouterLink>
            </p>
          </CardFooter>
        </Card>
      </form>
    </div>
  </div>
</template>
