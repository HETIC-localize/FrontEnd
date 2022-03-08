import { Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Langue',
      dataIndex: 'country',
      key: 'country',
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
          <Space size="middle">
            <a>
              <DeleteOutlined />
            </a>
          </Space>
        ),
      },
  ];

  export default columns