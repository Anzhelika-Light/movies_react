import { Form, Input } from "antd";
const { Search } = Input;

const MovieSearchForm = ({ onSubmit }) => {
  const onSearch = (value, _e, info) => {
    console.log(info?.source, value);
  };

  const onFinish = (values) => {
    onSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ search: "" }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
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
      </Form.Item>
    </Form>
  );
};

export default MovieSearchForm;
