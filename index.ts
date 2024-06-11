function longestCommonPrefix(word:string[]):string {
    if (word.length === 0) {
        return "";
    }
    // ใช้ตัวแรก เป็น การเปรียบเทียบ
    let prefix = word[0];

    for (let i = 1; i < word.length; i++) {
        const currentString = word[i];
        let j = 0;

        // เปรียบเทียบตัวอักษรแต่ละตัว
        for (j = 0; j < prefix.length && j < currentString.length; j++) {
            if (prefix[j] !== currentString[j]) {
                break;
            }
        }

        // ตัดเอาถึง index ที่ซ้ำกัน
        prefix = prefix.slice(0, j);

        // ถ้า prefix = "" แสดงว่าไม่มีคำนำหน้าร่วมกัน
        if (prefix === "") {
            return "";
        }
    }

    // คืนค่าคำนำหน้าร่วมกันที่ยาวที่สุด
    return prefix;
}

const example1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(example1)); // Output: "fl"

const example2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(example2)); // Output: ""