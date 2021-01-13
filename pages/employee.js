import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row, Col, Container, Form } from "react-bootstrap";
import Select from "react-select";
import NumberFormat from "react-number-format";
import { useForm, Controller } from "react-hook-form";

export default function EmployeePage() {
  // const [val, setVal] = useState({ name: "", pwd: "", check: false });
  const defaultValues = {
    name: "預設值",
    numberFormat: 0,
    pwd: "123456",
    mycheck: true,
    myRadios: "3",
    myselect: ""
  };
  const { register, handleSubmit, watch, errors, control } = useForm({
    defaultValues
  });

  const options = [
    { value: "1", label: "選擇一" },
    { value: "2", label: "選擇二" },
    { value: "3", label: "選擇三" }
  ];

  const onSubmit = (data) => {
    console.log(data);
    console.log(parseFloat(data.numberFormat));
  };

  console.log(watch("numberFormat")); // watch input value by passing the name of it

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Accordion defaultActiveKey="0" className="mt-2">
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Click me!
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="form-group">
                      <label htmlFor="name">文字輸入</label>
                      <input
                        type="type"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="文字輸入"
                        ref={register({ required: true })}
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                      {errors.name && <span>This field is required</span>}
                    </div>
                    <Form.Group>
                      <Form.Label>數字輸入</Form.Label>
                      <Controller
                        as={NumberFormat}
                        thousandSeparator
                        name="numberFormat"
                        className="form-control"
                        control={control}
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        請輸入數字.
                      </small>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pwd"
                        ref={register}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        name="mycheck"
                        label="Check me out"
                        ref={register}
                      />{" "}
                    </Form.Group>
                      <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                          Radios
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Check
                            type="radio"
                            label="first radio"
                            name="myRadios"
                            id="formHorizontalRadios1"
                            value="1"
                            ref={register}
                          />
                          <Form.Check
                            type="radio"
                            label="second radio"
                            name="myRadios"
                            id="formHorizontalRadios2"
                            value="2"
                            ref={register}
                          />
                          <Form.Check
                            type="radio"
                            label="third radio"
                            name="myRadios"
                            id="formHorizontalRadios3"
                            value="3"
                            ref={register}
                          />
                        </Col>
                      </Form.Group>
                    <Form.Group>
                      <Controller
                        as={Select}
                        options={options}
                        isClearable={true}
                        name="myselect"
                        control={control}
                        placeholder="請選擇....."
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
          </Row>
          <Row className="p-2"></Row>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    About CheckBox And RadioButton
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body></Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
          </Row>
        </Accordion>
      </Form>
    </Container>
  );
}
