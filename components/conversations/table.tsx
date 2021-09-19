import styled from "@emotion/styled"
import {bgNuisances, colorsMain, elevations} from "@styles/styles"
import React from "react"
import {useTable} from "react-table"

import {ConversationNode} from "./types"

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
interface Data {
  viewMessage: string
  children: ConversationNode[]
  id: number
  parentId: number | null
  text: string
  type: "sport" | "food"
  name: string
}

interface Columns {
  Header: string
  columns: {
    Header: string
    accessor: string
  }[]
}

interface Props {
  data: Data[]
  columns: Columns[]
  openDialog: (item: ConversationNode) => void
}

const ConversationsTable: React.FC<Props> = ({data, columns, openDialog}) => {
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
    useTable({
      columns,
      data,
    })
  return (
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
                  openDialog(row.original)
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
  )
}
export default ConversationsTable
