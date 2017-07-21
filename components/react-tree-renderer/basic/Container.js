import TreeRenderer from 'react-tree-renderer'
const root = {
  title: 'root',
  children: [
    {
      title: 'test1',
      children: [
        {
          title: 'test2',
          children: [
            {
              title: 'test3',
            },
            {
              title: 'test4',
            }
          ],
        },

      ],
    },
  ],
}

const Template = (props) => {
  const { data = {}, children = [], } = props
  return (
    <div>
      <p>{data.title}</p>
      <ul>
        {children.map((x, i) => (<li key={i}>{x}</li>))}
      </ul>
    </div>
  )
}

export default (props) => (
  <TreeRenderer Template={Template} data={root} />
)