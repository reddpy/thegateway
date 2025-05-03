import ComingSoon from "@/components/internal/dashboard/coming_soon_card";

 
export default async function Page() {
  const page_title = "reports";

 
  return (
    <ComingSoon pageName={page_title}/>
  )
}