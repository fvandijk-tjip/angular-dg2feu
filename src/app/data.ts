export const nodez = [
    {
      id: 1, name: 'root1',
    },
    {
      id: 2, name: 'root2',
      children: [
        { id: 3, name: 'child1' },
        { id: 4, name: 'child2', children: [
          { id: 100, name: 'grandchild1' },
          { id: 200, name: 'grandchild2' }
        ] }
      ]
    },
    {
      id: 1111, name: 'asyncroot',
      hasChildren: true
    }
  ];

  export const azyncChildren = [
    {
      id: 880, name: 'Kind1',
      hasChildren: true
    }, {
        id: 881, name: 'Kind2'
    }
  ];

  export const newNodez = [
      { name: 'child001' }, 
      { name: 'child002' }
  ];
 
