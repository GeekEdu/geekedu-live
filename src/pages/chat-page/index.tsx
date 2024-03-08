import React, { FC } from "react"
import { Tabs, Input, Button } from 'antd'
import type { TabsProps } from 'antd'

const { TextArea } = Input
const items: TabsProps['items'] = [
  {
    key: '1',
    label: '聊天',
    children: 'ChatAbout1111111111111111111',
  },
  {
    key: '2',
    label: '成员',
    children: 'MembersAbout1111111111111111',
  },
]
const onChange = (key: string) => {
  console.log(key);
}

const ChatPage: FC = () => {
  return (
    <>
      <div className='rounded-lg width: 300px; height: 600px'>
        <div className='h-96 bg-slate-100'>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
        <div className="h-32">
          <TextArea
            placeholder="Autosize height with minimum and maximum number of lines"
            autoSize={{ minRows: 2, maxRows: 6 }}
          />
          <Button danger >Send</Button>
        </div>
      </div>
    </>
  )
}

export default ChatPage
