# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

# Create a method called letter_filter
# Takes an array and a letter as parameters
def letter_filter array, letter
# Create a new array to push the words into
    new_array = []
# Iterate over the array using the .select method to select the correct words, and pass in a parameter of word
    array.select do |word|
# Make a conditional, check if one of the indexes of the word has the given letter
# Use the .index method, passing in the given letter to check if the word has the given letter inside of it
        if word.index(letter)
# If the word does have the given letter inside of it, using the shovel operator, push the word into the new array
            new_array << word
        end
    end
# print the newly populated, new array
    p new_array
end

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
letter_filter beverages_array, letter_o
# Expected output: ['coffee', 'soda water']

letter_t = 't'
letter_filter beverages_array, letter_t
# Expected output: ['tea', 'water', 'soda water']

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# Create a method called vowel_remover
# That takes a string as a parameter
def vowel_remover string
# Using the .delete method, remove all the vowels from the string by passing all lowercase and uppercase vowels to the .delete method.
# print the result
    p string.delete "aeiouAEIOU"
end

album1 = 'Rubber Soul'
vowel_remover album1
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
vowel_remover album2
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
vowel_remover album3
# Expected output: 'bby Rd'

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Create a class called Bike
class Bike
# that is initialized with a model, wheels, and current_speed
    def initialize model
        @model = model
# The default number of wheels is 2.
        @wheels = 2
# The current_speed should start at 0.
        @current_speed = 0
    end
# Create a get_info method that returns a sentence with all the data from the bike object
    def get_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
# Create a pedal_faster method that increases the speed, pass it a parameter of speed
    def pedal_faster speed
# Assign the current speed to the given speed
        @current_speed = speed
    end
# Create a brake method that decreases the speed (The bike cannot go negative speeds), pass it a parameter of speed
    def brake speed
# If the brake speed is greater than or equal to the current speed, assign it to 0 so the bike cannot go negative speeds
        if speed >= @current_speed
            @current_speed = 0
# Else if the brake speed is less than the current speed, assign the current speed to the brake speed subtracted from the current speed
        elsif speed < @current_speed
            @current_speed -= speed
        end
    end
end

trek = Bike.new 'Trek'

p trek.get_info
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

trek.pedal_faster 10
p trek.get_info
# Expected output example: my_bike.pedal_faster 10 => 10

trek.brake 15
p trek.get_info
# Expected output example: my_bike.brake 15 => 0
