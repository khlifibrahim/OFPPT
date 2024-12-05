chaine = input('Saisire une chaine de charachter: ')

myList = []
reversedList = []

def estPalindrome(ch):
    for i in range(len(ch)):
        myList.append(ch[i])
        reversedList.append(ch[i])
        
    reversedList.reverse()
    
    msgTrue = "Votre Phrase est palindrome"
    msgFalse = "Votre Phras n'est  paspalindrome"

    if myList[i] == reversedList[i]:
        print(msgTrue)
        return True
    else:
        print(msgFalse)
        return False


estPalindrome(chaine)