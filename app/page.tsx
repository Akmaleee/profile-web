import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export default function Home() {
  return (
      
    <div className="flex justify-center items-center h-screen">
    <Card className="ml-[25px] mt-[30px] "> 
    <CardHeader>
      <CardTitle className="text-center">PROFILE</CardTitle>
      <div className="self-center pt-[20px] w-[450px]">
      <img src="https://storage.googleapis.com/bucket-profile-akmale/20240827_170036.jpg" alt="Photo Profile" />
      </div>
      <CardDescription className="text-center">Photo from gcloud storage bucket</CardDescription>
    </CardHeader>
    <CardContent className="text-center text-3xl">
      <p>Akmal Nur Wahid</p>
    </CardContent>
    <CardFooter className="text-center text-3xl">
      <p>POLITEKNIK NEGERI JAKARTA</p>
    </CardFooter>
    </Card>
    </div>
  );
}
