const fs = require('fs').promises;
const path = require('path');

const MISSIONS_DATA_PATH = '../../data/missions.json';

async function readMissionsData() {
    try {
        const data = await fs.readFile(path.resolve(__dirname, MISSIONS_DATA_PATH));
        const missions = JSON.parse(data);

        return missions;
    } catch (error) {
        console.log(`Erro na leitura do arquivo: ${error}`);
    }
}

async function writeNewMissionData(newMission) {
    try {
        const oldMissions = await readMissionsData();
        const newMissionsWithId = { id: Date.now(), ...newMission };
        const allMissions = JSON.stringify([
            ...oldMissions, newMissionsWithId,
            { id: Date.now(), ...newMission },
        ]);

        await fs.writeFile(path.resolve(__dirname, MISSIONS_DATA_PATH), allMissions);
        return newMissionsWithId;
    } catch (error) {
        console.log(`Erro na escrita do arquivo: ${error}`);
    }
}

async function updateMissionData(id, updatedMissionData) {
    const oldMissions = await readMissionsData();
    const updateMission = { id, ...updatedMissionData }; 

    const updateMissions = oldMissions.reduce((missionsList, currentMission) => {
        if (currentMission.id === updateMission.id) { return [...missionsList, updateMission]; }
        return [...missionsList, currentMission];
    }, []);

    const updatedData = JSON.stringify(updateMissions);

    try {
        await fs.writeFile(path.resolve(__dirname, MISSIONS_DATA_PATH), updatedData);
        console.log(`Atualizou missão com o id ${id}`);
        return updateMission;
    } catch (error) {
        console.error(`Erro na escrita do arquivo: ${error}`);
    }
}

async function deleteMissionData(id) {
    const oldMissions = await readMissionsData();
    const updatedMission = oldMissions.filter((currentMission) => currentMission.id !== id);

    const updatedData = JSON.stringify(updatedMission);

    try {
        await fs.writeFile(path.resolve(__dirname, MISSIONS_DATA_PATH), updatedData);
        console.log(`Deletou missão com o id ${id}`);
        return updatedMission;
    } catch (error) {
        console.error(`Erro na escrita do arquivo: ${error}`);
    }
}

module.exports = {
    readMissionsData,
    writeNewMissionData,
    updateMissionData,
    deleteMissionData,
};