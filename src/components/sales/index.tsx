import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Sales() {
    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Últimos Clientes
                    </CardTitle>
                    <CircleDollarSign className="ml-auto w-4 h-4"/>
                </div>
                <CardDescription>
                    Novos Clientes nas últimas 24 Horas.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://i.pravatar.cc/300" />
                        <AvatarFallback>
                            DV
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Jon Doe</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">jondoe@email.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://i.pravatar.cc/300" />
                        <AvatarFallback>
                            DV
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Jon Doe</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">jondoe@email.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://i.pravatar.cc/300" />
                        <AvatarFallback>
                            DV
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Jon Doe</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">jondoe@email.com</span>
                    </div>
                </article>
            </CardContent>
        </Card>
    );
}