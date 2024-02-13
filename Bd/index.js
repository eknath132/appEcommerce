import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('session.db');

export const init = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMAR KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)',
            [],
            ( ) => resolve(),
            (_, err) => reject(err))
        } )
    })
    return promise
}


export const insertSession = ({
    email,
    localId,
    token
}) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('INSERT INTO sessions (email, localId, token) VALUES (?,?,?);',
            [email, localId, token],
            (_, result) => resolve(result),
            (_, err) => reject(err))
        } )
    })
    return promise
}

export const fetchSession = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM sessions',
            [],
            (_, result) => resolve(result),
            (_, err) => reject(err))
        } )
    })
    return promise
}

export const deleteSession = ({localId}) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('DELETE FROM sessions WHERE localId = ? ',
            [localId],
            (_, result) => resolve(result),
            (_, err) => reject(err))
        } )
    })
    return promise
}