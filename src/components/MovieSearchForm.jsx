import { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
const { Search } = Input;

const INITIAL_STATE = {
  search: "",
};

const onFinish = (values) => {
  console.log("Success:", values);
};
// const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };

const MovieSearchForm = ({ onSubmit }) => {
  // const [state, setState] = useState({ ...INITIAL_STATE });

  // const handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   setState((prevState) => ({ ...prevState, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit({ ...state });
  //   setState({ ...INITIAL_STATE });
  // };

  // const { search } = state;

  const onSearch = (value, _e, info) => {
    console.log(info?.source, value);
    onSubmit(value);
  };

  return (
    <Form
      // onValuesChange={handleSubmit}
      name="basic"
      // labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      // initialValues={{ remember: true }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        // label={null}
        name="search"
        rules={[
          { required: true, message: "Please input the movie you search!" },
        ]}
      >
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
        {/* <Input name="search" value={search} onChange={handleChange} /> */}
      </Form.Item>

      {/* <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item> */}
    </Form>
  );

  <form onSubmit={handleSubmit}>
    <input name="search" value={search} onChange={handleChange} />
    <button type="submit">Search</button>
  </form>;
};

export default MovieSearchForm;
