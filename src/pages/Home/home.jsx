import { LinkHome, Con, Text } from "./home.styled"

export default function HomePage() {
  return (
    <Con>
      <div><Text>Welcome to the Phonebook!</Text></div>
      <LinkHome to="/login">Please, Login </LinkHome>


    </Con>
  )
}
