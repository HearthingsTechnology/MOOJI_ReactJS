import './Sobre.css';
import LogoHT from '../images/logoHT.jpg';

function Sobre() {
    var texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam nibh, interdum ac libero vel, aliquet auctor sapien. Pellentesque pharetra nec nulla sed pellentesque. Vivamus ut purus nec elit feugiat lobortis a quis urna. Quisque tempor massa non justo euismod suscipit. Cras libero magna, ullamcorper et elementum et, egestas nec erat. Nullam quis iaculis sapien, vitae cursus turpis. Pellentesque interdum tincidunt urna eu porttitor. Aenean nec ligula vitae libero volutpat lacinia a at ligula. Quisque et dui at sapien congue convallis ac eu lorem. Nam eu lacus et elit consectetur malesuada.";

        texto += "Morbi vehicula mauris ut interdum pharetra. Sed eget risus vitae lectus molestie laoreet efficitur eget eros. Mauris et rhoncus tellus. Suspendisse in porta mi, nec malesuada tellus. Aliquam leo magna, sagittis molestie lectus ut, ultricies suscipit libero. Morbi lacus augue, placerat dapibus augue id, tincidunt rhoncus erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur a tellus enim.";

        texto += "Integer magna dui, bibendum ut leo quis, gravida viverra turpis. In bibendum sit amet tellus id vehicula. Morbi vestibulum sagittis augue, non porta ipsum iaculis in. Nulla a metus a felis viverra luctus dapibus aliquam justo. Sed dui lorem, convallis a enim at, interdum condimentum felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi bibendum elementum nibh, et malesuada risus dapibus vitae. Quisque erat justo, scelerisque sit amet consectetur quis, tempor sed velit. Aenean congue nunc velit, at porta turpis mollis volutpat. Nam a pharetra ex, commodo gravida elit.";

        texto += "Ut consectetur ultrices libero sit amet fringilla. Fusce id dictum purus, eget placerat libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam felis leo, tincidunt vel tristique non, convallis eu mi. Quisque tempor ut magna eget vestibulum. Sed eleifend molestie bibendum. Sed lacinia enim vehicula, elementum massa in, cursus tellus. Suspendisse maximus iaculis tortor, ut hendrerit eros lobortis vel. Quisque ac tincidunt tellus.";

        texto += "Maecenas a nisl eu ipsum tristique placerat. Donec volutpat neque ac vulputate consequat. Aliquam vitae nunc ac ex sollicitudin congue. Nulla malesuada leo ac leo fermentum, vel fermentum erat viverra. Integer efficitur dolor sit amet justo consectetur, eget iaculis nisl tincidunt. Mauris lorem nisl, commodo at feugiat in, cursus vitae tortor. Etiam pretium augue non purus feugiat, vitae bibendum sem tempor. Aliquam auctor porttitor odio at ornare. Aliquam gravida iaculis congue. Nunc rhoncus egestas erat molestie vestibulum. Phasellus molestie arcu nec tellus efficitur, quis dictum eros ornare. Suspendisse mollis convallis pretium. Maecenas fermentum, quam eu suscipit lobortis, arcu felis tristique nisi, eget sollicitudin turpis tellus id odio. Nunc euismod nisi mi, eget ultricies sapien finibus vel. Quisque mollis diam vel augue tempus imperdiet.";

    return(
        <div className="containerSobre">
            <div className="text">
            <text>{texto}</text>
            </div>
            <div className="verticalLine"></div>
            <img src={LogoHT} className="ht"/>
        </div>
    );
}
export default Sobre;