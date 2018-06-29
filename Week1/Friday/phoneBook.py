import pickle

phonebook_dict = {}

def menu():
    print("Electronic Phone Book\n", ("=" * 21), sep="")
    print("1. Look up and entry")
    print("2. Set an entry")
    print("3. Delete an entry")
    print("4. List all entries")
    print("5. Save entries")
    print("6. Restore saved entries")
    print("7. Quit")

def action_1():
    name = input("Name: ")
    print("Found entry for {}: {}\n".format(name, phonebook_dict[name]))

def action_2():
    name = input("Name: ")
    phone = input("Phone Number: ")
    phonebook_dict[name] = phone
    print("Entry stored for {}.\n".format(name))

def action_3():
    name = input("Name: ")
    del phonebook_dict[name]
    print("Deleted entry for {}\n".format(name))

def action_4():
    for key, value in phonebook_dict.items():
        print("Found entry for {}: {}".format(key, value))
    print()

def action_5():
    myfile = open('phonebook_contacts.pickle', 'wb')
    pickle.dump(phonebook_dict, myfile)
    myfile.close()
    print("Entries saved to phonebook_contacts.pickle\n")

def action_6():
    global phonebook_dict
    myfile = open('phonebook_contacts.pickle', 'rb')
    phonebook_dict = pickle.load(myfile)
    print("Restored saved entries.\n")   

menu() # Start session
action = int(input("What do you want to do (1-7)? "))

while True:
    while True:
        if action != 1 and action != 2 and action != 3 and action != 4 and action != 5 and action != 6 and action != 7:
            action = int(input("Invalid action. Please select action 1-7: "))
        elif action == 1 or action == 2 or action == 3 or action == 4 or action == 5 or action == 6 or action == 7:
            break

    if action == 1:
        action_1()
        menu()
        action = int(input("What do you want to do (1-7)? "))

    elif action == 2:
        action_2()
        menu()
        action = int(input("What do you want to do (1-7)? "))

    elif action == 3:
        action_3()
        menu()
        action = int(input("What do you want to do (1-7)? "))

    elif action == 4:
        action_4()
        menu()
        action = int(input("What do you want to do (1-7)? "))

    elif action == 5:
        action_5()
        menu()
        action = int(input("What do you want to do (1-7)? "))

    elif action == 6:
        action_6()
        menu()
        action = int(input("What do you want to do (1-7)? "))
    
    elif action == 7:
        print("Bye.\n")
        break