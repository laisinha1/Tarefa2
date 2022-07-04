import Palavras from "./Palavras";

function App(){
  const palavras_chave = [
    {
      word: "linux"
    },
    {
      word: "docker"
    },
    {
      word : "server"
    },
    {
      word: "rails"
    },
    {
      word: "douane"
    },
    {
      word: "my-developments"
    },
    {
      word: "command-line"
    },
    {
      word : "ruby"
    },
    {
      word: "c-2"
    },
    {
      word: "linux-on-mac"
    },
    {
      word: "maintenance"
    },
    {
      word: "security"
    },
    {
      word: "gnome"
    },
    {
      word: "kubernetes"
    },
    {
      word: "mes-developpements"
    },
    {
      word: "ubuntu"
    },
    {
      word: "python"
    },
    {
      word: "vcs"
    },
    {
      word: "capybara"
    },
    {
      word: "contribution"
    },
    {
      word: "git"
    },
    {
      word: "apt"
    },
    {
      word: "bazaar"
    },
    {
      word: "chef"
    },
    {
      word: "cucumber"
    },
    {
      word: "debian"
    },
    {
      word: "game"
    },
    {
      word: "howto"
    },
    {
      word: "packaging"
    },
    {
      word: "testing"
    },
    {
      word: "boost"
    },
    {
      word: "debug"
    },
    {
      word: "devise"
    },
    {
      word: "elixir"
    },
    {
      word: "gtk"
    },
    {
      word: "homebrew"
    },
    {
      word: "information"
    },
    {
      word: "ssh"
    },
    {
      word: "tuxtremsplit"
    },
    {
      word: "xpath"
    },
  ]

  return(
    <div className="bloco">
      {palavras_chave.map ((chaves) => {
        return <Palavras
                word={chaves.word}
                />
      })
    }
    </div>
  )
}
export default App;