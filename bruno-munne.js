const paddockManagers = [
  { id: 1, taxNumber: "132254524", name: "JUAN TAPIA BURGOS" },
  { id: 2, taxNumber: "143618668", name: "EFRAIN SOTO VERA" },
  { id: 3, taxNumber: "78903228", name: "CARLOS PEREZ GONZALEZ" },
  { id: 4, taxNumber: "176812737", name: "ANDRES VIÑALES CIENFUEGOS" },
  { id: 5, taxNumber: "216352696", name: "OSCAR PEREZ ZUÑIGA" },
  { id: 6, taxNumber: "78684747", name: "JOAQUIN ANDRADE SANDOVAL" },
];

// Tipo de cuartel, en el cual se utiliza el tipo de producto plantado
const paddockType = [
  { id: 1, name: "PALTOS" },
  { id: 2, name: "AVELLANOS" },
  { id: 3, name: "CEREZAS" },
  { id: 4, name: "NOGALES" },
];

const paddocks = [
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 1200,
  },
  {
    paddockManagerId: 1,
    farmId: 3,
    paddockTypeId: 4,
    harvestYear: 2019,
    area: 500,
  },
  {
    paddockManagerId: 5,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 20000,
  },
  {
    paddockManagerId: 2,
    farmId: 2,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 8401,
  },
  {
    paddockManagerId: 3,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2020,
    area: 2877,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2017,
    area: 15902,
  },
  {
    paddockManagerId: 3,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2018,
    area: 1736,
  },
  {
    paddockManagerId: 2,
    farmId: 3,
    paddockTypeId: 3,
    harvestYear: 2020,
    area: 2965,
  },
  {
    paddockManagerId: 4,
    farmId: 3,
    paddockTypeId: 4,
    harvestYear: 2018,
    area: 1651,
  },
  {
    paddockManagerId: 5,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2018,
    area: 700,
  },
  {
    paddockManagerId: 1,
    farmId: 2,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 7956,
  },
  {
    paddockManagerId: 5,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 3745,
  },
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 11362,
  },
  {
    paddockManagerId: 2,
    farmId: 3,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 300,
  },
  {
    paddockManagerId: 3,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 19188,
  },
  {
    paddockManagerId: 3,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 17137,
  },
  {
    paddockManagerId: 4,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 100,
  },
  {
    paddockManagerId: 2,
    farmId: 1,
    paddockTypeId: 3,
    harvestYear: 2019,
    area: 11845,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 1,
    harvestYear: 2018,
    area: 15969,
  },
  {
    paddockManagerId: 1,
    farmId: 3,
    paddockTypeId: 1,
    harvestYear: 2029,
    area: 10420,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 3,
    harvestYear: 2010,
    area: 3200,
  },
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 2,
    harvestYear: 2012,
    area: 10587,
  },
  {
    paddockManagerId: 2,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2018,
    area: 16750,
  },
];

const farms = [
  { id: 1, name: "AGRICOLA SANTA ANA" },
  { id: 2, name: "VINA SANTA PAULA" },
  { id: 3, name: "FORESTAL Y AGRICOLA LO ENCINA" },
];

function listPaddockManagerIds() {
  return paddockManagers.map((paddockManager) => paddockManager.id);
}

function listPaddockManagersByName() {
  return paddocks
    .map((paddock) =>
      paddockManagers.find((manager) => manager.id === paddock.paddockManagerId)
    )
    .sort((a, b) => a.name < b.name && -1)
    .map((manager) => manager.taxNumber);
}

function sortPaddockTypeByTotalArea() {
  return Object.values(
    paddocks.reduce((prev, curr) => {
      const key = curr.farmId;
      if (!prev[curr.farmId])
        prev[curr.farmId] = { farmId: curr.farmId, area: curr.area };
      else prev[curr.farmId].area += curr.area;

      return prev;
    }, {})
  )
    .sort((a, b) => b.area - a.area)
    .map(
      (farmToFind) => farms.find((farm) => farmToFind.farmId === farm.id).name
    );
}

function sortFarmManagerByAdminArea() {
  return Object.values(
    paddocks.reduce((prev, curr) => {
      const key = curr.paddockManagerId;
      if (!prev[key]) {
        prev[key] = {
          paddockManagerId: curr.paddockManagerId,
          area: curr.area,
        };
      } else {
        prev[key].area += curr.area;
      }

      return prev;
    }, {})
  )
    .sort((a, b) => b.area - a.area)
    .map(
      (paddock) =>
        paddockManagers.find(
          (manager) => manager.id === paddock.paddockManagerId
        ).name
    );
}

function farmManagerNames() {
  const result = {};
  farms.map(
    (farm) =>
      (result[farm.name] = paddocks
        .filter((paddock) => paddock.farmId === farm.id)
        .map((paddock) =>
          paddockManagers.find(
            (manager) => manager.id === paddock.paddockManagerId
          )
        )
        .sort((manager1, manager2) => {
          if (manager1.name < manager2.name) {
            return -1;
          }
          if (manager1.name > manager2.name) {
            return 1;
          }
          return 0;
        })
        .map((manager) => manager.taxNumber))
  );
  return result;
}

function biggestAvocadoFarms() {
  return Object.values(
    paddocks.reduce((prev, curr) => {
      if (
        curr.paddockTypeId ===
        paddockType.find((type) => type.name === "PALTOS").id
      ) {
        const key = curr.farmId;
        if (!prev[key]) prev[key] = curr.area;
        else prev[key] += curr.area;
      }
      return prev;
    }, {})
  )
    .filter((area) => area > 20000)
    .sort((a, b) => b - a);
}

function biggestCherriesManagers() {
  return Object.values(
    paddocks
      .filter(
        (paddock) =>
          paddock.farmId ===
            farms.find((farm) => farm.name === "FORESTAL Y AGRICOLA LO ENCINA")
              .id &&
          paddock.paddockTypeId ===
            paddockType.find((type) => type.name === "CEREZAS").id
      )
      .reduce((prev, curr) => {
        const key = curr.paddockManagerId;
        if (!prev[key])
          prev[key] = {
            paddockManagerId: curr.paddockManagerId,
            area: curr.area,
          };
        else prev[key].area += curr.area;

        return prev;
      }, {})
  )
    .map(
      (paddock) =>
        paddock.area > 1000 &&
        paddockManagers.find(
          (manager) => manager.id === paddock.paddockManagerId
        ).name
    )
    .sort();
}

function farmManagerPaddocks() {
  const result = {};
  paddockManagers.map(
    (manager) =>
      (result[manager.name] = paddocks
        .filter((paddock) => paddock.paddockManagerId === manager.id)
        .map((paddock) => farms.find((farm) => farm.id === paddock.farmId).name)
        .sort())
  );
  return result;
}

function paddocksManagers() {
  return paddocks.reduce((prev, curr) => {
    const key =
      paddockType.find((type) => type.id === curr.paddockTypeId).name +
      "-" +
      curr.harvestYear;
    if (!prev[key]) {
      prev[key] = Object.fromEntries(
        new Map([
          [
            curr.paddockManagerId,
            [
              paddockManagers.find(
                (manager) => manager.id === curr.paddockManagerId
              ).name,
            ],
          ],
        ])
      );
    } else {
      const tmp = Object.entries(prev[key]);
      tmp.push([
        curr.paddockManagerId,
        [
          paddockManagers.find(
            (manager) => manager.id === curr.paddockManagerId
          ).name,
        ],
      ]);
      prev[key] = Object.fromEntries(tmp);
    }

    return prev;
  }, {});
}

function newManagerRanking() {
  const paddockManagersCopy = [...paddockManagers];
  const paddocksCopy = [...paddocks];
  paddockManagersCopy.push({
    id: 7,
    taxNumber: "155423",
    name: "GUSTAVO GARCIA",
  });
  paddocksCopy.push({
    paddockManagerId: 7,
    farmId: 1,
    paddockTypeId: 4,
    harvestYear: 2017,
    area: 900,
  });

  return Object.values(
    paddocksCopy.reduce((prev, curr) => {
      const key = curr.paddockManagerId;
      if (!prev[key]) {
        prev[key] = {
          paddockManagerId: curr.paddockManagerId,
          area: curr.area,
        };
      } else {
        prev[key].area += curr.area;
      }

      return prev;
    }, {})
  )
    .sort((a, b) => b.area - a.area)
    .map(
      (paddock) =>
        paddockManagersCopy.find(
          (manager) => manager.id === paddock.paddockManagerId
        ).name
    )
    .indexOf("GUSTAVO GARCIA");
}

console.log("Pregunta 0");
console.log(listPaddockManagerIds());
console.log("Pregunta 1");
console.log(listPaddockManagersByName());
console.log("Pregunta 2");
console.log(sortPaddockTypeByTotalArea());
console.log("Pregunta 3");
console.log(sortFarmManagerByAdminArea());
console.log("Pregunta 4");
console.log(farmManagerNames());
console.log("Pregunta 5");
console.log(biggestAvocadoFarms());
console.log("Pregunta 6");
console.log(biggestCherriesManagers());
console.log("Pregunta 7");
console.log(farmManagerPaddocks());
console.log("Pregunta 8");
console.log(paddocksManagers());
console.log("Pregunta 9");
console.log(newManagerRanking());
