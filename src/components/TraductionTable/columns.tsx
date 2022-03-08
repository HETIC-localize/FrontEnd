import { Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const columns = [
    {
      title: 'Mot',
      dataIndex: 'word',
      key: 'word',
    },
    {
      title: 'Traduction',
      dataIndex: 'traductedWord',
      key: 'traductedWord',
    },
    {
      title: 'Pays',
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