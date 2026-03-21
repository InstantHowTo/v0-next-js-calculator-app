"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Minus, X, Divide, Equal } from "lucide-react"

export default function Calculator() {
  const [num1, setNum1] = useState<string>("")
  const [num2, setNum2] = useState<string>("")
  const [result, setResult] = useState<number | string>("")
  const [operation, setOperation] = useState<string>("")

  const handleOperation = (op: string) => {
    if (!num1 || !num2) {
      setResult("Please enter both numbers")
      return
    }

    const number1 = Number.parseFloat(num1)
    const number2 = Number.parseFloat(num2)

    setOperation(op)

    switch (op) {
      case "add":
        setResult(number1 + number2)
        break
      case "subtract":
        setResult(number1 - number2)
        break
      case "multiply":
        setResult(number1 * number2)
        break
      case "divide":
        if (number2 === 0) {
          setResult("Cannot divide by zero")
        } else {
          setResult(number1 / number2)
        }
        break
      default:
        setResult("Invalid operation")
    }
  }

  const clearCalculator = () => {
    setNum1("")
    setNum2("")
    setResult("")
    setOperation("")
  }

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="bg-gray-100 border-b">
        <CardTitle className="text-center">Calculator</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="num1" className="block text-sm font-medium mb-1">
                First Number
              </label>
              <Input
                id="num1"
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Enter first number"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="num2" className="block text-sm font-medium mb-1">
                Second Number
              </label>
              <Input
                id="num2"
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Enter second number"
                className="w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Button
              onClick={() => handleOperation("add")}
              className="flex items-center justify-center"
              variant={operation === "add" ? "default" : "outline"}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
            <Button
              onClick={() => handleOperation("subtract")}
              className="flex items-center justify-center"
              variant={operation === "subtract" ? "default" : "outline"}
            >
              <Minus className="h-4 w-4 mr-2" />
              Subtract
            </Button>
            <Button
              onClick={() => handleOperation("multiply")}
              className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white"
              variant={operation === "multiply" ? "default" : "outline"}
            >
              <X className="h-4 w-4 mr-2" />
              Multiply
            </Button>
            <Button
              onClick={() => handleOperation("divide")}
              className="flex items-center justify-center"
              variant={operation === "divide" ? "default" : "outline"}
            >
              <Divide className="h-4 w-4 mr-2" />
              Divide
            </Button>
          </div>

          <div className="pt-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium">Result:</span>
              <Button variant="ghost" size="sm" onClick={clearCalculator}>
                Clear
              </Button>
            </div>
            <div className="bg-gray-100 p-4 rounded-md flex items-center">
              <Equal className="h-5 w-5 mr-3 text-gray-500" />
              <span className="text-xl font-semibold">{result === "" ? "—" : result}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
