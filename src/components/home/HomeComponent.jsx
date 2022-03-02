import "./HomeStyle.css";
import React, {useEffect} from "react"
import ChatScreen from "../../screens/ChatScreen";
function HomeComponent() {
    function rainbow(str) {
        var multiplier = 5;
        var result = "";
        let lastWhite = false;

        for (var i = 0; i < str.length; i++) {
        
            result += `<font style="color: ${lastWhite ? 'white' : 'rgb(47, 230, 93)'}">`
            result += str.substr(i, 1);
            result += "</font>";
            if(i % 2 == 0 && i * 40 / 2 > 3){
                lastWhite = !lastWhite;
            }
        }
        return result;
    }

    useEffect(() => {
        const text = document.getElementById("home-text");
        text.innerHTML = rainbow(text.innerText)
    }, [])
  return (
    <div className="home">
      <ChatScreen />
      <h1 style={{ color: "white", textDecoration: "3px solid white underline", width: 300, marginLeft: 30, paddingBottom: 10}}>Hej ty!</h1>
      <p
        style={{
          color: "rgb(47, 230, 93)",
          fontWeight: "bolder",
          textAlign: "justify",
        }}
        id="home-text"
      >
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce tellus.
        Maecenas sollicitudin. In dapibus augue non sapien. Aenean vel massa
        quis mauris vehicula lacinia. Aliquam id dolor. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Integer tempor. Aenean placerat. Maecenas ipsum velit, consectetuer eu
        lobortis ut, dictum at dui. Itaque earum rerum hic tenetur a sapiente
        delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
        perferendis doloribus asperiores repellat. Nunc tincidunt ante vitae
        massa.
      </p>
    </div>
  );
}
export default HomeComponent;
