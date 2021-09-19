import styled from "@emotion/styled"
import {bgNuisances, colorsMain, elevations} from "@styles/styles"
import {Fragment, useMemo, useReducer} from "react"
import {useTable} from "react-table"

import conversationsdata from "../../data/conv-data.json"
import MessageDialog from "./message.dialog"
import {reducer} from "./reducer"
import {Conversation, ConversationNode} from "./types"

function makeTreeConversations(
  data: Conversation[],
  parentId: null | number = null,
): Array<ConversationNode> {
  return data
    .filter((node) => node.parentId === parentId)
    .reduce(
      (tree: Array<ConversationNode>, node: Conversation) => [
        ...tree,
        {...node, children: makeTreeConversations(data, node.id)},
      ],
      [],
    )
}

const Wrapper = styled.div`
  max-width: 900px;
  margin: 1rem auto;
  display: flex;
  flex-flow: column wrap;
`

const TrHead = styled.tr`
  display: flex;
  th {
    flex: 1;
    padding: 0.2rem;
    font-size: 1rem;
  }
`
const TrBody = styled.tr`
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: ${bgNuisances.bg100};
  }
  td {
    flex: 1;
  }
`
const Table = styled.table`
  border-radius: 4px;
  border: 1px solid ${colorsMain.text};
  box-shadow: ${elevations.md};

  tr {
    th {
      text-align: left;
    }
  }
  tbody {
    tr {
      border: 1px solid ${bgNuisances.bg500};
      border-radius: 4px;
      padding: 0.2rem;
      font-size: 1rem;
    }
  }
`

const Conversations = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Conversations",
        columns: [
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Subject",
            accessor: "type",
          },
          {
            Header: "Message          ",
            accessor: "viewMessage",
          },
        ],
      },
      // {
      //   Header: "Info",
      //   columns: [
      //     {
      //       Header: "Age",
      //       accessor: "col1",
      //     },
      //     {
      //       Header: "Visits",
      //       accessor: "col2",
      //     },
      //   ],
      // },
    ],
    [],
  )

  const data = useMemo(
    () =>
      makeTreeConversations(conversationsdata as Conversation[]).map(
        (item) => ({
          ...item,
          viewMessage: "View message",
        }),
      ),
    [],
  )
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
    useTable({
      columns,
      data,
    })

  const [{item, isDialogOpen}, dispatch] = useReducer(reducer, {
    item: null,
    isDialogOpen: false,
  })

  return (
    <Fragment>
      <MessageDialog
        isDialogOpen={isDialogOpen}
        item={item}
        closeDialog={() => {
          dispatch({type: "CLOSE_DIALOG"})
        }}
      />
      <Wrapper>
        <Table {...getTableProps()}>
          <thead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => {
                const {key, role} = headerGroup.getHeaderGroupProps()
                return (
                  // Apply the header row props
                  <TrHead key={key} role={role}>
                    {
                      // Loop over the headers in each row
                      headerGroup.headers.map((column) => {
                        const {key, role} = column.getHeaderProps()
                        return (
                          // Apply the header cell props
                          <th key={key} role={role}>
                            {
                              // Render the header
                              column.render("Header")
                            }
                          </th>
                        )
                      })
                    }
                  </TrHead>
                )
              })
            }
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              rows.map((row) => {
                // console.log("row", row)
                // Prepare the row for display
                prepareRow(row)
                const {key, ...rest} = row.getRowProps()
                return (
                  // Apply the row props
                  <TrBody
                    key={key}
                    {...rest}
                    onClick={() => {
                      dispatch({type: "OPEN_DIALOG", item: row.original})
                    }}
                  >
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        // console.log("cell", cell)
                        const {key, ...rest} = cell.getCellProps()
                        // Apply the cell props
                        return (
                          <td key={key} {...rest}>
                            {
                              // Render the cell contents
                              cell.render("Cell")
                            }
                          </td>
                        )
                      })
                    }
                  </TrBody>
                )
              })
            }
          </tbody>
        </Table>
      </Wrapper>
    </Fragment>
  )
}

export default Conversations
