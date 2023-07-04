<!-- <template>
  <GridTable :tableData="tableData" />
</template>

<script setup lang="ts">
  import GridTable from './GridTable.vue';

  interface Props {
    id: string | number;
  }

  const props = defineProps<Props>();

  // table data fetching
  // const {
  //   data,
  //   isLoading,
  // } = useTableData(
  //   props.id,
  //   {
  //     interval: 10000,  // 10초
  //   }
  // );

  /**
   * Dummy data
   *
   * fetching data를 대체하기 위한 dummy data
   */
  // Type 정의
  type TableColumns = {
    label: string,
		prop: string,
		align: string,
		width: number,
		value?: string,
		type: string,
		backgroundColor?: string
  }[];
  type TableRows = {
    [key: string]: string;
  }[];
  type TableData = {
    columns: TableColumns,
    rows: TableRows,
    [key: string]: any,
  };

  const dummy: TableData = {
		userId: "HKKWON",
		dashboardId: 1,
		panelId: 13,
		panelVer: 1,
		panelType: "TABLE",
		panelName: "Table Example",
		refreshInterval: 20,
		serviceUrlId: "SFCC.SELECT.TableExample",
		serviceUrlVer: 2,
		serviceUrl: "SFCC",
		serviceUrlName: "Table Example",
		useYn: null,
		posX: 0,
		posY: 0,
		width: 13,
		height: 4,
		color: null,
		field: null,
		titleYn: "false",
		size: null,
		columns: [
			{
				label: "차종",
				prop: "DATA1",
				align: "center",
				width: 75,
				value: undefined,
				type: "COL",
				backgroundColor: undefined,
			},
			{
				label: "생산량",
				prop: "DATA2",
				align: "center",
				width: 75,
				// value: undefined,
				type: "ROW",
				// backgroundColor: undefined,
			},
			{
				label: "생산일자",
				prop: "DATA3",
				align: "center",
				width: 75,
				// value: undefined,
				type: "ROW",
				// backgroundColor: undefined,
			},
		],
		rows: [
      {
        stat: "2",
        color: "orange",
        DATA3: "2022-09-03",
        DATA2: "3555",
        DATA1: "CAR2"
      },
      {
        stat: "3",
        color: "red",
        DATA3: "2022-09-14",
        DATA2: "2446",
        DATA1: "CAR1"
      },
      {
        stat: "999",
        DATA3: "2022-09-05",
        DATA2: "5655",
        DATA1: "CAR3"
      }
    ]
	};

  console.log('dummy', dummy);
</script> -->
