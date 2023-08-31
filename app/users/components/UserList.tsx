"use client";

import { User } from "@prisma/client";
import UserBox from "./UserBox";

type Props = {
  items: User[];
};

const UserList = ({ items }: Props) => {
  return (
    <aside
      className="fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80
    lg-block overflow-y-auto border-r border-gray-700 block w-full left-0 bg-gray-900"
    >
        <div className="px-5">
            <div className="flex-col">
                <div className="text-2xl font-bold text-white py-4">
                    Friends
                </div>
            </div>
            {/* List of users */}
            {items.map((item) => (
                <UserBox
                key={item.id}
                data={item}
                />
            ))}
        </div>
    </aside>
  );
};

export default UserList;
