<template>
  <div class="relative mt-3 flex items-center">
    <table class="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead>
        <tr class="bg-white border-b border-gray-200 text-[#7B7E8E] font-[600] leading-[20px]">
          <th scope="col" class="py-3"></th>
          <th scope="col" class="py-3">Project name</th>
          <th scope="col" class="py-3">Members</th>
          <th scope="col" class="py-3">Status</th>
          <th scope="col" class="py-3">Timeline</th>
          <th scope="col" class="py-3">Progress</th>
          <th scope="col" class="py-3 text-right pe-3">Actions</th>
        </tr>
      </thead>

      <tbody v-for="item in numbers" :key="item.id">
        
      
        
          <tr class="bg-white border-b border-gray-200">
            <th class="py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2.66667 8.66634H13.3333C13.5101 8.66634 13.6797 8.5961 13.8047 8.47108C13.9298 8.34605 14 8.17649 14 7.99967C14 7.82286 13.9298 7.65329 13.8047 7.52827C13.6797 7.40325 13.5101 7.33301 13.3333 7.33301H2.66667C2.48986 7.33301 2.32029 7.40325 2.19526 7.52827C2.07024 7.65329 2 7.82286 2 7.99967C2 8.17649 2.07024 8.34605 2.19526 8.47108C2.32029 8.5961 2.48986 8.66634 2.66667 8.66634Z"
                  fill="#999EAC"
                />
                <path
                  d="M13.3333 3.33301H2.66667C2.48986 3.33301 2.32029 3.40325 2.19526 3.52827C2.07024 3.65329 2 3.82286 2 3.99967C2 4.17649 2.07024 4.34605 2.19526 4.47108C2.32029 4.5961 2.48986 4.66634 2.66667 4.66634H13.3333C13.5101 4.66634 13.6797 4.5961 13.8047 4.47108C13.9298 4.34605 14 4.17649 14 3.99967C14 3.82286 13.9298 3.65329 13.8047 3.52827C13.6797 3.40325 13.5101 3.33301 13.3333 3.33301Z"
                  fill="#999EAC"
                />
                <path
                  d="M2.66667 12.6663H13.3333C13.5101 12.6663 13.6797 12.5961 13.8047 12.4711C13.9298 12.3461 14 12.1765 14 11.9997C14 11.8229 13.9298 11.6533 13.8047 11.5283C13.6797 11.4032 13.5101 11.333 13.3333 11.333H2.66667C2.48986 11.333 2.32029 11.4032 2.19526 11.5283C2.07024 11.6533 2 11.8229 2 11.9997C2 12.1765 2.07024 12.3461 2.19526 12.4711C2.32029 12.5961 2.48986 12.6663 2.66667 12.6663Z"
                  fill="#999EAC"
                />
              </svg>
            </th>
            <td class="py-4">
              <div class="h-full flex items-center">
                <img src="/imgs/project-name/Logo.png" class="me-2" alt="Rox" />
                <span>ROX Bank</span>
              </div>
            </td>
            <td class="py-4"><members-table /></td>
            <td class="py-4">
              <span
                class="py-[2px] px-[12px] font-[600] leading-[20px] rounded-[4px]"
                :class="
                  isActive ? 'bg-[#E6FBEF]  text-[#005A28]  ' : 'bg-[#FCE6E6]  text-[#600000] '
                "
                >{{ isActive ? 'Active' : 'Hold' }}</span
              >
            </td>
            <td class="py-4">
              <span class="text-[#14151A] font-[500] leading-[20px]">Apr, 2023 - Aug 2023</span>
            </td>
            <td class="py-4">
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="4"
                  viewBox="0 0 80 4"
                  fill="none"
                >
                  <g clip-path="url(#clip0_602_9766)">
                    <rect width="80" height="4" fill="#F3F5FD" />
                    <rect width="24" height="4" transform="matrix(-1 0 0 1 24 0)" fill="#002B96" />
                  </g>
                  <defs>
                    <clipPath id="clip0_602_9766">
                      <path
                        d="M0 0H78C79.1046 0 80 0.895431 80 2C80 3.10457 79.1046 4 78 4H0V0Z"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span class="text-[12px] ms-1">30%</span>
              </div>
            </td>
            <td class="py-4 text-right pe-3">
              <button
                class="border px-[12px] py-[8px] rounded-[6px] border-[#0165F8] text-[#0165F8]"
              >
                view
              </button>
            </td>
          </tr>
        
      </tbody>
    </table>
  </div>
</template>
<script setup>
import MembersTable from './MembersTable.vue'
const isActive = false
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
</script>
