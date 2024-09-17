import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BiHide, BiShow } from "react-icons/bi";

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

const PasswordField = ({
  handleFieldChange,
}: {
  handleFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={`flex flex-col w-[100%] `}>
      <div className="flex flex-row items-end">
        <Input
          placeholder="Password"
          type={passwordVisible ? "text" : "password"}
          onChange={handleFieldChange}
        />
        <button
          className="bg-black p-3 rounded-sm text-white m-auto ml-3 btn btn-primary"
          onClick={togglePasswordVisibility}
        >
          {passwordVisible ? <BiHide /> : <BiShow />}
        </button>
      </div>
    </div>
  );
};

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSelectChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Card className="w-[40vw] m-auto">
      <CardHeader>
        <CardTitle className="text-3xl mx-auto">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              {/* <Label htmlFor='email'>Email</Label> */}
              <Input
                id="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                placeholder="someone@gmail.com"
              />
            </div>

            <PasswordField
              handleFieldChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <CardFooter className="flex justify-center w-full mt-8">
            <Button type="submit">Submit</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
