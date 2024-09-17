import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const states = ["Andhra Pradesh", "Bihar", "Gujarat"];

export default function SignUpForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    state: "",
    city: "",
    street: "",
    zipCode: "",
    role: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Card className="md:w-[50vw] lg:w-[40vw] m-auto">
      <CardHeader>
        <CardTitle className="text-3xl">Get Started</CardTitle>
        <CardDescription>
          Welcome to AgriConnect - Let's create you account
        </CardDescription>
        <hr />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Input
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="someone@gmail.com"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Input
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Input password"
                type="password"
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Input
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                type="password"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Input
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                type="tel"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Select
                onValueChange={(value) => handleSelectChange("state", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Input
                id="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                required
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Input
                id="street"
                value={formData.street}
                onChange={handleChange}
                placeholder="Street address"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Input
                id="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="Zip code"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Select
                onValueChange={(value) => handleSelectChange("role", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Farmer">Farmer</SelectItem>
                  <SelectItem value="Contractor">Contractor</SelectItem>
                  <SelectItem value="Admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <CardDescription className="mt-3 ">
            Already have an account? <a className="active:text-red-700" style={{"cursor": "pointer"}} onClick={() => navigate("/login")}>Login</a>
          </CardDescription>
          <CardFooter className="flex justify-center w-full my-0">
            <Button type="submit" className="w-[70vw] mt-7">
              Submit
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
