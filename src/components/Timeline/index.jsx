import "./styles.css";
import { Form } from "../Form";

const Timeline = () => {
  return (
    <div className="container-timeline" id="scroll">
      <h2 className="h2-timeline">
        MONTE AQUI SEU <strong>CRONOGRAMA DE ESTUDOS PERFEITO</strong>
      </h2>
      <div className="timeline">
        <Form />
      </div>
    </div>
  );
};

export { Timeline };
