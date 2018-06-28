# cipher = "lbh zhfg hayrnea jung lbh unir yrnearq"

# alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"]

# print(alphabet)
# position = 0
# newPosition = 0
# finalString = ""

# for cipherLetter in cipher :
#     if cipherLetter.isspace() == False :
#         position = alphabet.index(cipherLetter)
#         newPosition = position - 13
#     print(alphabet[newPosition])
        # if newPosition < 0 :
        #     newPosition = 26 + newPosition
        # finalString = finalString + alphabet[newPosition]
# print(finalString)

# str1 = "this is string example....wow exam exam exam!!!";
# str2 = "exam";

# if str1.find(str2) >= 0 :
#     print(str1.replace(str2, "aaaaaaa"))
    

# print(str1.find(str2))

### nested loop

# for outerIndex in range(0,10):
#         print(outerIndex)
#     for innerIndex in range(0,10):
#         print("outerIndex: {} innerIndex {}".format(outerIndex, innerIndex))


for outerIndex in range(0,10):
    print(outerIndex)
    for innerIndex in range(0,10):
        #print("outerIndex: {} innerIndex {}".format(outerIndex, innerIndex))
        for innerInnerIndex in range(0,5):
            print("outerIndex: {} innerIndex {} innerInnerIndex {}".format(outerIndex, innerIndex, innerInnerIndex))
    
