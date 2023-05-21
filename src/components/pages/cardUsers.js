import { Select, Space } from 'antd';
const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const App = () => (
  <Select
    mode="multiple"
    style={{
      width: '100%',
    }}
    placeholder="select one country"
    defaultValue={['china']}
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="china" label="China">
      <Space>
        <span className='border border-gray-900 dark:!bg-secondary p-10' role="img" aria-label="China">
          🇨🇳
        </span>
        China (中国)
      </Space>
    </Option>
    <Option value="usa" label="USA">
      <Space>
        <span className='border border-gray-900 dark:!bg-secondary p-10'  role="img" aria-label="USA">
          🇺🇸
        </span>
        USA (美国)
      </Space>
    </Option>
    <Option value="japan" label="Japan">
      <Space>
        <span className='border border-gray-900 dark:!bg-secondary p-10'  role="img" aria-label="Japan">
          🇯🇵
        </span>
        Japan (日本)
      </Space>
    </Option>
    <Option value="korea" label="Korea">
      <Space>
        <span className='border border-gray-900 dark:!bg-secondary p-10 h-8'  role="img" aria-label="Korea">
          🇰🇷xcvvcx
        </span>
        Korea (韩国)
      </Space>
    </Option>
  </Select>
);
export default App;