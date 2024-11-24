import {signIn, signOut} from "../auth";

export async function doLogout() {
    await signOut({ redirectTo: "/" });
};

export async function doCredentialLogin(formData: FormData): Promise<any> {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    console.log("IS THIS BEING CALLED");
    try {
        console.log(await signIn("credentials", {
            email,
            password,
            redirect: false
        }));
        //console.log(response);
        return "hi";
    } catch (err: any) {
        return err.response;
    }
}