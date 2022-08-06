import { createContext, FC, ReactNode, useState } from "react";

interface IBudgetContext {
	budget: number
}

export const BudgetContext = createContext({
	budget: 0
})

const useBudgetValue = () => {
	const [BudgetContext, setBudgetContext] = useState<IBudgetContext>(
		() => {
			return {
				budget: 10
			}
		}
	)
	return BudgetContext
}

export const BudgetContextProvider: FC<{children: ReactNode}> = ({children}) => {
		return <BudgetContext.Provider value={useBudgetValue()}>{children}</BudgetContext.Provider>
} 