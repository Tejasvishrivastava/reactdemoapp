var mylist =require('./component/list')

test("testing items array",()=>{
    expect(mylist).toBeDefined()
    expect(mylist).not.toBe({"1":"mango"})
    expect(mylist[1]).toContain("mango")
})