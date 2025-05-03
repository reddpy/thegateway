 import ComingSoon from "@/components/internal/dashboard/coming_soon_card"

export default async function Page() {
  const page_title = "alerts";
 
  return (
    <ComingSoon pageName={page_title}/>
  )
}