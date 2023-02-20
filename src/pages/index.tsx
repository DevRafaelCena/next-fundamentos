import { styled } from "@/styles"

const Button = styled("button", {
  backgroundColor: "$rocketseat",
  borderRadius:4,
  border: 0,
  padding: "8px 16px",

  span: {
    fontWeight: "bold",
  },

  '&:hover': {
    filter: "brightness(0.9)",
  },
})

export default function Home() {
  return (
    <>
    <h1>Hello world</h1>
    <Button> <span>TESTE</span>Botão novo</Button>
    </>
  )
}
