"use client";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useState } from "react";
import AuthScreen from "../screens/AuthScreen";
// import useUser from "../hooks/useUser";
import { CircleUserRound } from "lucide-react";
// import { registerUser } from "../actions/register-user";

const ProfileDropDown = () => {
  const [signedIn, setsignedIn] = useState(false);
  const [open, setOpen] = useState(false);
  // const { user, loading } = useUser();
  // const { data } = useSession();
  //
  // useEffect(() => {
  //   if (!loading) {
  //     setsignedIn(!!user);
  //   }
  //   if (data?.user) {
  //     setsignedIn(true);
  //     addUser(data?.user);
  //   }
  // }, [loading, user, open, data]);

  const logoutHandler = () => {
    // if (data?.user) {
    //   signOut();
    // } else {
    //   Cookies.remove("access_token");
    //   Cookies.remove("refresh_token");
    //   toast.success("Log out successful!");
    //   window.location.reload();
    // }
  };

  // const addUser = async (user: any) => {
  //   await registerUser(user);
  // };
  const user = {
    image: "https://www.google.com/saod.jpg",
    email: "email@gmial.com",
  };
  const data = {
    user: user,
  };

  return (
    <div className="flex items-center gap-4">
      {signedIn ? (
        <Dropdown
          placement="bottom-end"
          className="bg-white dark:bg-background"
        >
          <DropdownTrigger>
            <Avatar
              as="button"
              className="transition-transform"
              src={data?.user?.image ? data.user.image : user.image}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">
                {data?.user ? data.user.email : user.email}
              </p>
            </DropdownItem>
            <DropdownItem key="settings">My Profile</DropdownItem>
            <DropdownItem key="all_orders">All Orders</DropdownItem>
            <DropdownItem key="team_settings">
              Apply for seller account
            </DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              onClick={() => logoutHandler()}
            >
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <p onClick={() => setOpen(!open)} className="flex cursor-pointer ">
          <CircleUserRound className="text-2xl mr-2" />
          Contul tău
        </p>
      )}
      {open && <AuthScreen setOpen={setOpen} />}
    </div>
  );
};

export default ProfileDropDown;
