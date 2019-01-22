export default interface RootState {
    links: {
        title: string,
        url: string
    }[],
    users: {
        name: string,
        sex: string
    }[]
}
