"use client";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import doGoogleLogin from "../_actions/doGoogleLogin";


export default function Header() {
  return (
    <header>
      <Card>
        <CardContent className="p-5 flex justify-between flex-row items-center">
          <h1>Musicista</h1>

          // doGoogleLogin is an external function because the signIn() only works in a server component
          <Button onClick={() => doGoogleLogin()}>Login com Google</Button>
        </CardContent>
      </Card>
    </header>
  )
}