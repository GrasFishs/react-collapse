class Leaf{
    constructor({name,id,parentId}={name:null,id:null,parentId:null}){
        this.name = name;
        this.id = id;
        this.parentId = parentId;
    }

    setChild(leaf){
        if(this.children){
            this.children.push(leaf);
        }else{
            this.children = [leaf];
        }
    }
}

export class TreeNode{
    constructor(list){
        this.leaves = [];
        this.initLeaves(list);
    }
    
    initLeaves(list){
        for(const item of list){
            this.leaves.push(new Leaf(item))
        }
    }

    buildTree(){
        const root = new Leaf();
        for(const item of this.leaves){
            if(item.parentId === -1){
                root.setChild(item);
            }
        }
        for(const item of this.leaves){
            if(item.parentId !== -1){
                this.insertToParent(root,item);
            }
        }
        return root;
    }

    // 递归地遍历，插入到父节点里
    insertToParent(root,leaf){
        if(root.children){
            for(const item of root.children){
                if(item.id === leaf.parentId){
                    item.setChild(leaf);
                    return;
                }else{
                    this.insertToParent(item,leaf);
                }
            }
        }
    }
}
