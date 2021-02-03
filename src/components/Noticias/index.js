import React, {Component} from 'react';
import './styles.css';


class Noticias extends Component{
  //changeurl  = () => this.props.history.push('/recreacion/bingo');
  render(){
    return(
      <div className="container noticiasStyle">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Inicio</a></li>
            <li className="breadcrumb-item active" aria-current="page">Noticias</li>
          </ol>
        </nav>
        <div className="image_noticiasStyle">
        </div>
        <h4 className="textimage_noticiasStyle">Conoce más acerca del nuevo coronavirus (COVID-19)</h4>
        <div className="adviceStyle">
          <h4>Nuevo coronavirus (COVID-19)</h4>
          <a href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019">
            <p>Si quiere más información oficial de click aquí.</p>
          </a>
        </div>
        <div className="justifyStyle">
          <h4>Medidas de protección básicas contra el nuevo coronavirus </h4>
          <p>Manténgase al día de la información más reciente sobre el brote de COVID-19, a la que puede acceder en el sitio web de la OMS y a través de las autoridades de salud pública pertinentes a nivel nacional y local. La COVID-19 sigue afectando principalmente a la población de China, aunque se han producido brotes en otros países. La mayoría de las personas que se infectan padecen una enfermedad leve y se recuperan, pero en otros casos puede ser más grave. Cuide su salud y proteja a los demás a través de las siguientes medidas:</p>
          <h5>Lávese las manos frecuentemente</h5>
          <p>Lávese las manos con frecuencia con un desinfectante de manos a base de alcohol o con agua y jabón.</p>
          <h5>¿Por qué?</h5>
          <p>Lavarse las manos con un desinfectante a base de alcohol o con agua y jabón mata el virus si este está en sus manos.</p>
          <h5>Adopte medidas de higiene repiratoria</h5>
          <p>Al toser o estornudar, cúbrase la boca y la nariz con el codo flexionado o con un pañuelo; tire el pañuelo inmediatamente y lávese las manos con un desinfectante de manos a base de alcohol, o con agua y jabón.</p>
          <h5>¿Por qué?</h5>
          <p>Al cubrir la boca y la nariz durante la tos o el estornudo se evita la propagación de gérmenes y virus. Si usted estornuda o tose cubriéndose con las manos puede contaminar los objetos o las personas a los que toque.</p>
          <h5>Mantenga distanciamiento social</h5>
          <p>Mantenga al menos 1 metro (3 pies) de distancia entre usted y las demás personas, particularmente aquellas que tosan, estornuden y tengan fiebre.</p>
          <h5>¿Por qué?</h5>
          <p>Cuando alguien con una enfermedad respiratoria, como la infección por el 2019-nCoV, tose o estornuda, proyecta pequeñas gotículas que contienen el virus. Si está demasiado cerca, puede inhalar el virus.</p>
          <h5>Evite tocarse los ojos, la nariz y la boca</h5>
          <p>Las manos tocan muchas superficies que pueden estar contaminadas con el virus. Si se toca los ojos, la nariz o la boca con las manos contaminadas, puedes transferir el virus de la superficie a si mismo.</p>
          <h5>Si tiene fiebre, tos y dificultad para respirar, solicite atención médica a tiempo</h5>
          <p>Indique a su prestador de atención de salud si ha viajado a una zona de China en la que se haya notificado la presencia del 2019-nCoV, o si ha tenido un contacto cercano con alguien que haya viajado desde China y tenga síntomas respiratorios.

             <strong>¿Por qué?</strong> Siempre que tenga fiebre, tos y dificultad para respirar, es importante que busque atención médica de inmediato, ya que dichos síntomas pueden deberse a una infección respiratoria o a otra afección grave. Los síntomas respiratorios con fiebre pueden tener diversas causas, y dependiendo de sus antecedentes de viajes y circunstancias personales, el 2019-nCoV podría ser una de ellas.</p>
          <h5>Manténgase informado y siga las recomendaciones de los profesionales sanitarios</h5>
          <p>Manténgase informado sobre las últimas novedades en relación con la COVID-19. Siga los consejos de su dispensador de atención de salud, de las autoridades sanitarias pertinentes a nivel nacional y local o de su empleador sobre la forma de protegerse a sí mismo y a los demás ante la COVID-19.

             <strong>¿Por qué?</strong> Las autoridades nacionales y locales dispondrán de la información más actualizada acerca de si la COVID-19 se está propagando en su zona. Son los interlocutores más indicados para dar consejos sobre las medidas que la población de su zona debe adoptar para protegerse. </p>
        </div>
        <div className="adviceStyle">
          <h4>Nuevo coronavirus (COVID-19)</h4>
          <a href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019">
            <p>Si quiere más información oficial de click aquí.</p>
          </a>
        </div>
        <div>

        </div>
      </div>
    );
  }
}

export default Noticias;
