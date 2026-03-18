class UserRepository {
    private users = [
        {id: 1, name: "Ana"},
        {id: 2, name: "Luis"},
        {id: 3, name: "Carlos"},
    ];

    async findAll(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.users)
            }, 1000)
        })
    }

    async findById(id: number){
        return new Promise((resolve) => {
            setTimeout(() => {
                const user = this.users.find(u => u.id === id);
                resolve(user);
            }, 1000)
        });
    }
}

async function main() {
    const repo = new UserRepository();

    const users = await repo.findAll();
    console.log(users);

    const user = await repo.findById(2);
    console.log(user);
}

main(); 
