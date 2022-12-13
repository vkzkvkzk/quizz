import { render } from "@testing-library/react"
import { AlertProvider } from "../context/AlertContext"
import { QuizProvider } from "../context/QuizContext"
import { ResultsProvider } from "../context/ResultsContext"
import AlertPop from "../pages/common/components/AlertPop"

const alertMock = {}
const resultsMock = {}
const quizMock = {}
export const contextWrapper = (ui) => {
    return render(
        <AlertProvider>
            <AlertPop />
            <ResultsProvider>
                <QuizProvider>
                    {ui}
                </QuizProvider>
            </ResultsProvider>
        </AlertProvider>
    )
}